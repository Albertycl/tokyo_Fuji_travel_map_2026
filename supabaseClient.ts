import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tenrjckyoffxisoeuijb.supabase.co';
const supabaseAnonKey = 'sb_publishable_jOw98ADjjtQkDLKB9td1_g_0Kt_4o4r';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types for trip notes
export interface TripNote {
  id?: number;
  event_id: string;
  details: string;
  created_at?: string;
  updated_at?: string;
}

// Save or update a note
export async function saveNote(eventId: string, details: string): Promise<boolean> {
  const { error } = await supabase
    .from('trip_notes')
    .upsert(
      { event_id: eventId, details, updated_at: new Date().toISOString() },
      { onConflict: 'event_id' }
    );

  if (error) {
    console.error('Error saving note:', error);
    return false;
  }
  return true;
}

// Load all notes
export async function loadAllNotes(): Promise<Record<string, string>> {
  const { data, error } = await supabase
    .from('trip_notes')
    .select('event_id, details');

  if (error) {
    console.error('Error loading notes:', error);
    return {};
  }

  const notes: Record<string, string> = {};
  data?.forEach((note) => {
    notes[note.event_id] = note.details;
  });
  return notes;
}

// Delete a note
export async function deleteNote(eventId: string): Promise<boolean> {
  const { error } = await supabase
    .from('trip_notes')
    .delete()
    .eq('event_id', eventId);

  if (error) {
    console.error('Error deleting note:', error);
    return false;
  }
  return true;
}

// Types for packing checklist
export interface ChecklistItem {
  id: string;
  checked: boolean;
}

// Save checklist item state
export async function saveChecklistItem(itemId: string, checked: boolean): Promise<boolean> {
  const { error } = await supabase
    .from('packing_checklist')
    .upsert(
      { item_id: itemId, checked, updated_at: new Date().toISOString() },
      { onConflict: 'item_id' }
    );

  if (error) {
    console.error('Error saving checklist item:', error);
    return false;
  }
  return true;
}

// Load all checklist items
export async function loadAllChecklistItems(): Promise<Record<string, boolean>> {
  const { data, error } = await supabase
    .from('packing_checklist')
    .select('item_id, checked');

  if (error) {
    console.error('Error loading checklist:', error);
    return {};
  }

  const items: Record<string, boolean> = {};
  data?.forEach((item) => {
    items[item.item_id] = item.checked;
  });
  return items;
}

// Save all checklist items at once
export async function saveAllChecklistItems(items: Record<string, boolean>): Promise<boolean> {
  const records = Object.entries(items).map(([item_id, checked]) => ({
    item_id,
    checked,
    updated_at: new Date().toISOString()
  }));

  const { error } = await supabase
    .from('packing_checklist')
    .upsert(records, { onConflict: 'item_id' });

  if (error) {
    console.error('Error saving checklist:', error);
    return false;
  }
  return true;
}

// Reset all checklist items to unchecked
export async function resetAllChecklistItems(): Promise<boolean> {
  const { error } = await supabase
    .from('packing_checklist')
    .update({ checked: false, updated_at: new Date().toISOString() })
    .neq('item_id', '');

  if (error) {
    console.error('Error resetting checklist:', error);
    return false;
  }
  return true;
}

// Types for custom checklist items
export interface CustomChecklistItem {
  id: string;
  category_id: string;
  name: string;
  note?: string;
  created_at?: string;
}

// Save custom item
export async function saveCustomItem(item: { id: string; category_id: string; name: string; note?: string }): Promise<boolean> {
  const { error } = await supabase
    .from('custom_checklist_items')
    .upsert(
      { ...item, updated_at: new Date().toISOString() },
      { onConflict: 'id' }
    );

  if (error) {
    console.error('Error saving custom item:', error);
    return false;
  }
  return true;
}

// Load all custom items
export async function loadCustomItems(): Promise<CustomChecklistItem[]> {
  const { data, error } = await supabase
    .from('custom_checklist_items')
    .select('*');

  if (error) {
    console.error('Error loading custom items:', error);
    return [];
  }
  return data || [];
}

// Delete custom item
export async function deleteCustomItem(itemId: string): Promise<boolean> {
  const { error } = await supabase
    .from('custom_checklist_items')
    .delete()
    .eq('id', itemId);

  if (error) {
    console.error('Error deleting custom item:', error);
    return false;
  }
  return true;
}
