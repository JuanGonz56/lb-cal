// src/store.js
import { writable } from 'svelte/store';

// Store to hold inquiries
export const inquiries = writable([
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    phoneNumber: '123-456-7890',
    serviceType: 'Caliper Restoration',
    caliperColor: 'Red',
    wheelColor: 'Black',
    appointmentDate: '2024-12-01',
    message: 'Calipers are in great condition.',
    status: 'Pending',
    visible: true,
  },
  {
    id: 2,
    firstName: 'Jane',
    lastName: 'Smith',
    phoneNumber: '987-654-3210',
    serviceType: 'Custom Powder Coating',
    caliperColor: 'Blue',
    wheelColor: 'Silver',
    appointmentDate: '2024-12-10',
    message: 'Needs a complete refresh.',
    status: 'Pending',
    visible: true,
  },
  {
    id: 3,
    firstName: 'Alex',
    lastName: 'Johnson',
    phoneNumber: '555-123-9876',
    serviceType: 'Both',
    caliperColor: 'Green',
    wheelColor: 'Matte Black',
    appointmentDate: '2024-12-15',
    message: 'Looking for both caliper and wheel coating.',
    status: 'Pending',
    visible: true,
  }
]);

// Functions for adding, updating, and removing inquiries
export function addInquiry(inquiry) {
  inquiries.update(currentInquiries => {
    console.log("New Inquiry: ", inquiry);  // Log the new inquiry
    return [...currentInquiries, inquiry];
  });
}

export function updateInquiry(id, updatedInquiry) {
  inquiries.update(currentInquiries => {
    return currentInquiries.map(inquiry => 
      inquiry.id === id ? { ...inquiry, ...updatedInquiry } : inquiry
    );
  });
}

export function removeInquiry(id) {
  inquiries.update(currentInquiries => {
    return currentInquiries.filter(inquiry => inquiry.id !== id);
  });
}
