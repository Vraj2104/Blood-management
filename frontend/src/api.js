const API_BASE_URL = 'https://blood-management-backend-3hku.onrender.com';

export async function getBloodStock() {
  const res = await fetch(`${API_BASE_URL}/blood-stock`);
  return res.json();
}

export async function addDonation(donation) {
  const res = await fetch(`${API_BASE_URL}/donations`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(donation)
  });
  return res.json();
}

export async function addPatientRequest(request) {
  const res = await fetch(`${API_BASE_URL}/patients/requests`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(request)
  });
  return res.json();
}

export async function addDonorSchedule(schedule) {
  const res = await fetch(`${API_BASE_URL}/donors/schedule`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(schedule)
  });
  return res.json();
} 