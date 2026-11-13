import fs from 'fs';
import path from 'path';
import { Enquiry, EnquiryStatus } from '@/types';

const STORE_PATH = path.join(process.cwd(), '.enquiries_store.json');

// Helper to read the store
function readStore(): { enquiries: Enquiry[]; sequence: number } {
  try {
    if (fs.existsSync(STORE_PATH)) {
      const content = fs.readFileSync(STORE_PATH, 'utf-8');
      return JSON.parse(content);
    }
  } catch (err) {
    console.error('Failed to read local store:', err);
  }
  return { enquiries: [], sequence: 0 };
}

// Helper to write to store
function writeStore(data: { enquiries: Enquiry[]; sequence: number }) {
  try {
    fs.writeFileSync(STORE_PATH, JSON.stringify(data, null, 2), 'utf-8');
  } catch (err) {
    console.error('Failed to write local store:', err);
  }
}

export function generateLocalEnquiryNumber(): string {
  const store = readStore();
  store.sequence += 1;
  const year = new Date().getFullYear();
  const idStr = String(store.sequence).padStart(4, '0');
  writeStore(store);
  return `VV-${year}-${idStr}`;
}

export function saveLocalEnquiry(enquiry: Omit<Enquiry, 'id' | 'enquiry_number' | 'created_at' | 'updated_at'>): Enquiry {
  const store = readStore();
  const enquiry_number = generateLocalEnquiryNumber();
  const now = new Date().toISOString();
  
  const newEnquiry: Enquiry = {
    ...enquiry,
    id: `local-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
    enquiry_number,
    created_at: now,
    updated_at: now,
  };

  store.enquiries.unshift(newEnquiry);
  writeStore(store);
  return newEnquiry;
}

export function getLocalEnquiries(): Enquiry[] {
  const store = readStore();
  return store.enquiries;
}

export function updateLocalEnquiryStatus(id: string, status: EnquiryStatus, notes?: string): Enquiry | null {
  const store = readStore();
  const item = store.enquiries.find((e) => e.id === id || e.enquiry_number === id);
  if (!item) return null;

  item.status = status;
  if (notes !== undefined) {
    item.notes = notes;
  }
  item.updated_at = new Date().toISOString();
  writeStore(store);
  return item;
}
