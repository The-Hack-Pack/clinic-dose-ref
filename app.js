// Clinic Dose Reference — static, offline lookup. No patient data, no network.
const TABLE = [
  { drug: 'Acetaminophen', dose: '650–1000 mg PO q6h (max 3 g/day)', note: 'Antidote: N-acetylcysteine' },
  { drug: 'Adrenaline (anaphylaxis)', dose: '0.3–0.5 mg IM (1:1000)', note: 'Repeat q5–15 min' },
  { drug: 'Amoxicillin', dose: '500 mg PO q8h', note: 'Adult, uncomplicated' },
  { drug: 'Atropine (bradycardia)', dose: '0.5 mg IV q3–5 min (max 3 mg)', note: '' },
  { drug: 'Cyanide poisoning', dose: 'Hydroxocobalamin 5 g IV over 15 min', note: 'Antidote lookup; do NOT delay' },
  { drug: 'Digoxin', dose: '0.125–0.25 mg PO daily', note: 'Narrow therapeutic index' },
  { drug: 'Naloxone', dose: '0.4–2 mg IV/IM, repeat q2–3 min', note: 'Opioid reversal' },
  { drug: 'Nitroglycerin', dose: '0.4 mg SL q5 min x3', note: 'Angina' },
];

function render(q) {
  const term = (q || '').trim().toLowerCase();
  const rows = term ? TABLE.filter((r) => r.drug.toLowerCase().includes(term)) : TABLE;
  document.getElementById('results').innerHTML = rows
    .map((r) => `<div class="row"><span class="drug">${r.drug}</span> — ${r.dose}${r.note ? `<div class="note">${r.note}</div>` : ''}</div>`)
    .join('');
}

document.getElementById('q').addEventListener('input', (e) => render(e.target.value));
render('');
