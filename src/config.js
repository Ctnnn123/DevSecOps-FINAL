// ============================================================
//  PERINGATAN: aplikasi ini SENGAJA dibuat rentan untuk praktikum.
//  Jangan gunakan kode ini (atau pola di dalamnya) di production.
//  Semua "secret" di bawah ini PALSU (hanya untuk simulasi).
// ============================================================

module.exports = {
  port: process.env.PORT || 3000,

  // Secret untuk menandatangani JWT (diambil dari environment variable)
  jwtSecret: process.env.JWT_SECRET || 'dev_secret_key_change_me',

  // API key payment gateway (diambil dari environment variable)
  paymentGatewayApiKey: process.env.PAYMENT_GATEWAY_API_KEY || 'dev_payment_key_change_me',

  // Pengaturan default aplikasi
  defaultSettings: {
    currency: 'IDR',
    dailyTransferLimit: 10000000,
    notifications: { email: true, sms: false },
  },
};