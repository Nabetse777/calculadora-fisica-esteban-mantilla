function validar(inputs) {
  return inputs.every(input => input.value.trim() !== "" && !isNaN(input.value));
}

function calcularVelocidad() {
  const d = document.getElementById("vel_d");
  const t = document.getElementById("vel_t");
  if (!validar([d, t]) || parseFloat(t.value) === 0) return alert("Datos inválidos");
  const v = parseFloat(d.value) / parseFloat(t.value);
  document.getElementById("res_vel").textContent = `${v.toFixed(2)} m/s`;
}

function calcularAceleracion() {
  const vf = document.getElementById("ace_vf");
  const vi = document.getElementById("ace_vi");
  const t = document.getElementById("ace_t");
  if (!validar([vf, vi, t]) || parseFloat(t.value) === 0) return alert("Datos inválidos");
  const a = (parseFloat(vf.value) - parseFloat(vi.value)) / parseFloat(t.value);
  document.getElementById("res_ace").textContent = `${a.toFixed(2)} m/s²`;
}

function calcularFuerza() {
  const m = document.getElementById("fue_m");
  const a = document.getElementById("fue_a");
  if (!validar([m, a])) return alert("Datos inválidos");
  const f = parseFloat(m.value) * parseFloat(a.value);
  document.getElementById("res_fue").textContent = `${f.toFixed(2)} N`;
}

function calcularTrabajo() {
  const f = document.getElementById("tra_f");
  const d = document.getElementById("tra_d");
  const theta = document.getElementById("tra_theta");
  if (!validar([f, d, theta])) return alert("Datos inválidos");
  const rad = parseFloat(theta.value) * (Math.PI / 180);
  const w = parseFloat(f.value) * parseFloat(d.value) * Math.cos(rad);
  document.getElementById("res_tra").textContent = `${w.toFixed(2)} J`;
}

function calcularEnergiaCinetica() {
  const m = document.getElementById("ec_m");
  const v = document.getElementById("ec_v");
  if (!validar([m, v])) return alert("Datos inválidos");
  const k = 0.5 * parseFloat(m.value) * Math.pow(parseFloat(v.value), 2);
  document.getElementById("res_ec").textContent = `${k.toFixed(2)} J`;
}

function calcularEnergiaPotencial() {
  const m = document.getElementById("ep_m");
  const h = document.getElementById("ep_h");
  const g = 9.81;
  if (!validar([m, h])) return alert("Datos inválidos");
  const u = parseFloat(m.value) * g * parseFloat(h.value);
  document.getElementById("res_ep").textContent = `${u.toFixed(2)} J`;
}

function calcularDensidad() {
  const m = document.getElementById("den_m");
  const v = document.getElementById("den_v");
  if (!validar([m, v]) || parseFloat(v.value) === 0) return alert("Datos inválidos");
  const p = parseFloat(m.value) / parseFloat(v.value);
  document.getElementById("res_den").textContent = `${p.toFixed(2)} kg/m³`;
}

function calcularPresion() {
  const f = document.getElementById("pre_f");
  const a = document.getElementById("pre_a");
  if (!validar([f, a]) || parseFloat(a.value) === 0) return alert("Datos inválidos");
  const p = parseFloat(f.value) / parseFloat(a.value);
  document.getElementById("res_pre").textContent = `${p.toFixed(2)} Pa`;
}

function calcularCarga() {
  const i = document.getElementById("car_i");
  const t = document.getElementById("car_t");
  if (!validar([i, t])) return alert("Datos inválidos");
  const q = parseFloat(i.value) * parseFloat(t.value);
  document.getElementById("res_car").textContent = `${q.toFixed(2)} C`;
}

function calcularOhm() {
  const i = document.getElementById("ohm_i");
  const r = document.getElementById("ohm_r");
  if (!validar([i, r])) return alert("Datos inválidos");
  const v = parseFloat(i.value) * parseFloat(r.value);
  document.getElementById("res_ohm").textContent = `${v.toFixed(2)} V`;
}
