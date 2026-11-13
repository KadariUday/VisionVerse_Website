-- VISION VERSE24 DATABASE SCHEMA
-- Supabase PostgreSQL Migration

-- 1. Enable UUID Extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. Sequence for Friendly Enquiry IDs (e.g. VV-2026-001)
CREATE SEQUENCE IF NOT EXISTS enquiry_seq START 1;

CREATE OR REPLACE FUNCTION generate_enquiry_number()
RETURNS TEXT AS $$
DECLARE
    next_val INT;
    formatted_id TEXT;
BEGIN
    SELECT nextval('enquiry_seq') INTO next_val;
    formatted_id := 'VV-' || TO_CHAR(CURRENT_DATE, 'YYYY') || '-' || LPAD(next_val::TEXT, 4, '0');
    RETURN formatted_id;
END;
$$ LANGUAGE plpgsql;

-- 3. Table: enquiries
CREATE TABLE IF NOT EXISTS public.enquiries (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    enquiry_number VARCHAR(50) UNIQUE NOT NULL DEFAULT generate_enquiry_number(),
    full_name VARCHAR(150) NOT NULL,
    whatsapp_number VARCHAR(30) NOT NULL,
    email VARCHAR(150) NOT NULL,
    customer_type VARCHAR(50) NOT NULL,
    service_required VARCHAR(100) NOT NULL,
    budget VARCHAR(50) NOT NULL,
    project_description TEXT NOT NULL,
    contact_preference VARCHAR(30) NOT NULL DEFAULT 'WhatsApp',
    delivery_date VARCHAR(50),
    reference_url TEXT,
    attachment_path TEXT,
    status VARCHAR(30) NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'in-progress', 'completed', 'cancelled')),
    notes TEXT,
    ip_address VARCHAR(45),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Index for speedy admin searches & sorting
CREATE INDEX IF NOT EXISTS idx_enquiries_status ON public.enquiries(status);
CREATE INDEX IF NOT EXISTS idx_enquiries_created_at ON public.enquiries(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_enquiries_email ON public.enquiries(email);
CREATE INDEX IF NOT EXISTS idx_enquiries_whatsapp ON public.enquiries(whatsapp_number);

-- 4. Table: projects
CREATE TABLE IF NOT EXISTS public.projects (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(200) NOT NULL,
    slug VARCHAR(200) UNIQUE NOT NULL,
    description TEXT NOT NULL,
    category VARCHAR(50) NOT NULL,
    thumbnail TEXT NOT NULL,
    screenshots TEXT[] DEFAULT '{}',
    technologies TEXT[] DEFAULT '{}',
    live_url TEXT,
    github_url TEXT,
    featured BOOLEAN DEFAULT false,
    published BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_projects_slug ON public.projects(slug);
CREATE INDEX IF NOT EXISTS idx_projects_featured ON public.projects(featured) WHERE published = true;

-- 5. Table: services
CREATE TABLE IF NOT EXISTS public.services (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(150) NOT NULL,
    description TEXT NOT NULL,
    price VARCHAR(50) NOT NULL,
    features TEXT[] DEFAULT '{}',
    active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- 6. Trigger: Updated At
CREATE OR REPLACE FUNCTION update_timestamp()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = TIMEZONE('utc'::text, NOW());
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS tr_enquiries_timestamp ON public.enquiries;
CREATE TRIGGER tr_enquiries_timestamp
    BEFORE UPDATE ON public.enquiries
    FOR EACH ROW
    EXECUTE FUNCTION update_timestamp();

DROP TRIGGER IF EXISTS tr_projects_timestamp ON public.projects;
CREATE TRIGGER tr_projects_timestamp
    BEFORE UPDATE ON public.projects
    FOR EACH ROW
    EXECUTE FUNCTION update_timestamp();

DROP TRIGGER IF EXISTS tr_services_timestamp ON public.services;
CREATE TRIGGER tr_services_timestamp
    BEFORE UPDATE ON public.services
    FOR EACH ROW
    EXECUTE FUNCTION update_timestamp();

-- 7. Row Level Security (RLS)
ALTER TABLE public.enquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;

-- Enquiries:
-- Public can INSERT through server route handler or anon key with minimal exposure
-- Public CANNOT SELECT or UPDATE enquiries (Protecting customer PII)
CREATE POLICY "Allow anonymous submission of enquiries"
    ON public.enquiries
    FOR INSERT
    TO anon, authenticated
    WITH CHECK (true);

-- Only service_role can select and update enquiries
CREATE POLICY "Allow service role full access to enquiries"
    ON public.enquiries
    FOR ALL
    TO service_role
    USING (true)
    WITH CHECK (true);

-- Projects:
-- Public can read published projects
CREATE POLICY "Allow public read published projects"
    ON public.projects
    FOR SELECT
    TO anon, authenticated
    USING (published = true);

-- Service role full access to projects
CREATE POLICY "Allow service role full access to projects"
    ON public.projects
    FOR ALL
    TO service_role
    USING (true)
    WITH CHECK (true);

-- Services:
-- Public can read active services
CREATE POLICY "Allow public read active services"
    ON public.services
    FOR SELECT
    TO anon, authenticated
    USING (active = true);

-- Service role full access to services
CREATE POLICY "Allow service role full access to services"
    ON public.services
    FOR ALL
    TO service_role
    USING (true)
    WITH CHECK (true);

-- 8. Seed Initial Services
INSERT INTO public.services (title, description, price, features, active)
VALUES
('RESUME BUILD', 'Professional resume websites and resume-building services that help students and job seekers present their skills effectively.', '₹299', ARRAY['ATS-Friendly Layout', 'Interactive Web Resume', 'Mobile Responsive', 'Downloadable PDF', 'Skills Highlighting', '24-48 Hours Delivery'], true),
('PORTFOLIO WEBSITE', 'Professional personal portfolio websites to showcase skills, achievements, experience and projects.', '₹499', ARRAY['Custom Design', 'Interactive Showcase', 'Contact Form to WhatsApp', 'Free Vercel Deployment', 'Source Code on GitHub', 'Unlimited Scope Revisions'], true),
('COLLEGE PROJECTS', 'Complete academic projects with source code, documentation, modern UI/UX and implementation guidance.', '₹699', ARRAY['Full Working Source Code', 'Modern Responsive UI', 'Complete Synopsis & Report', 'Setup & Run Guide', 'Viva Tips', '1-on-1 Code Walkthrough'], true),
('TRAINING & LEARN', 'Learn to build practical end-to-end projects with development guidance, deployment and hosting support.', '₹999', ARRAY['Hands-on End-to-End Build', 'Next.js & Modern UI', 'Database & API Wiring', 'Vercel Deployment', 'Direct Guidance from Leads'], true),
('BUSINESS WEBSITES & APPLICATIONS', 'Custom websites, e-commerce platforms and web applications designed for business requirements.', '₹1,500–₹5,000', ARRAY['Bespoke Design', '100% Responsive', 'WhatsApp & Call CTA', 'Product Catalog', 'Lead Management', 'SEO & High Speed'], true)
ON CONFLICT DO NOTHING;
