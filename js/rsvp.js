/**
 * Google Form: Confirmación casamiento Valen & JP
 * https://docs.google.com/forms/d/e/1FAIpQLScYVTHse9oasScuHJ5KbmI_21oLRzPvJmY1YojBTQ-_r_cJhA/viewform
 *
 * Los values de asistencia y restricciones tienen que coincidir
 * exactamente con las opciones del Form.
 */
const GOOGLE_FORM_ID = "1FAIpQLScYVTHse9oasScuHJ5KbmI_21oLRzPvJmY1YojBTQ-_r_cJhA";

const ENTRIES = {
  fullName: "entry.280154091",
  plusOne: "entry.768279828",
  attendance: "entry.736576402",
  dietary: "entry.1134038068",
  transport: "entry.1110434338",
  comments: "entry.1360719051",
  whatsapp: "entry.1091157155",
};

const ATTENDANCE_VALUES = {
  yes: "Si",
  no: "No",
};

const SUCCESS_URL = "./rsvp-exito.html";

function isConfigured() {
  return Boolean(GOOGLE_FORM_ID);
}

function appendEntry(form, entryName, value) {
  if (!entryName || entryName.includes("XXXX") || value == null || value === "") {
    return;
  }
  const input = document.createElement("input");
  input.type = "hidden";
  input.name = entryName;
  input.value = value;
  form.appendChild(input);
}

function submitToGoogleForm(data) {
  const proxy = document.createElement("form");
  proxy.action = `https://docs.google.com/forms/d/e/${GOOGLE_FORM_ID}/formResponse`;
  proxy.method = "POST";
  proxy.target = "hidden-google-form";
  proxy.style.display = "none";

  appendEntry(proxy, ENTRIES.fullName, data.fullName);
  appendEntry(proxy, ENTRIES.plusOne, data.plusOne);
  appendEntry(proxy, ENTRIES.attendance, ATTENDANCE_VALUES[data.attendance] || data.attendance);
  appendEntry(proxy, ENTRIES.dietary, data.dietary);
  appendEntry(proxy, ENTRIES.transport, ATTENDANCE_VALUES[data.transport] || data.transport);
  appendEntry(proxy, ENTRIES.comments, data.comments);
  appendEntry(proxy, ENTRIES.whatsapp, data.whatsapp);

  document.body.appendChild(proxy);
  proxy.submit();
  proxy.remove();
}

const WHATSAPP_HINT = "Ingresá un número válido, por ejemplo +54 9 11 1234 5678";

function isValidWhatsApp(value) {
  const trimmed = value.trim();
  if (trimmed === "") {
    return true;
  }
  if (!/^\+?[\d\s().-]+$/.test(trimmed)) {
    return false;
  }
  const digits = trimmed.replace(/\D/g, "");
  return digits.length >= 8 && digits.length <= 15;
}

function validateWhatsApp(input) {
  input.setCustomValidity(isValidWhatsApp(input.value) ? "" : WHATSAPP_HINT);
}

function collectFormData(form) {
  return {
    fullName: form.fullName.value.trim(),
    plusOne: form.plusOne.value.trim(),
    attendance: form.attendance.value,
    dietary: form.dietary.value,
    transport: form.transport.value,
    comments: form.comments.value.trim(),
    whatsapp: form.whatsappPhone.value.trim(),
  };
}

const form = document.getElementById("wedding-rsvp-form");

if (form) {
  const whatsappInput = form.whatsappPhone;

  whatsappInput.addEventListener("input", () => validateWhatsApp(whatsappInput));
  whatsappInput.addEventListener("blur", () => validateWhatsApp(whatsappInput));

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    validateWhatsApp(whatsappInput);

    if (!form.reportValidity()) {
      return;
    }

    const data = collectFormData(form);

    if (isConfigured()) {
      submitToGoogleForm(data);
    }

    window.setTimeout(() => {
      window.location.href = SUCCESS_URL;
    }, isConfigured() ? 700 : 0);
  });
}
