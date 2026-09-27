// ============================================================
//  PERINGATAN: aplikasi ini SENGAJA dibuat rentan untuk praktikum.
//  Jangan gunakan kode ini (atau pola di dalamnya) di production.
//  Semua "secret" di bawah ini PALSU (hanya untuk simulasi).
// ============================================================

module.exports = {
  port: process.env.PORT || 3000,

  // BARIS UJI COBA SECURITY GATE (MEMICU DETEKSI GITLEAKS)
  TEST_LEAKED_SECRET: "sk_live_1234567890abcdef1234567890",

  jwtSecret: process.env.JWT_SECRET || 'dev_secret_key_change_me',
  paymentGatewayApiKey: process.env.PAYMENT_GATEWAY_API_KEY || 'dev_payment_key_change_me',

  defaultSettings: {
    currency: 'IDR',
    dailyTransferLimit: 10000000,
    notifications: { email: true, sms: false },
  },
};