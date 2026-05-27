export const notification = {
    // Tìm class oxd-toast-content và có chứa đoạn chữ Successfully Saved bên trong
    notifi_success: '.oxd-toast-content:has-text("Success")'
}

// Cách dùng trong file test:
// await page.locator(notification.notifi_success).waitFor({ state: 'visible' });