document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const passwordElements = document.querySelectorAll('.password');
  
    function generatePassword() {
      const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
      const length = 12;
      let password = '';
      
      for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      
      return password;
    }
  
    function copyToClipboard(text) {
      navigator.clipboard.writeText(text).then(() => {
        // Visual feedback for copy
        const notification = document.createElement('div');
        notification.textContent = 'Copied!';
        notification.style.cssText = `
          position: fixed;
          top: 20px;
          right: 20px;
          background: #34d399;
          color: white;
          padding: 1rem;
          border-radius: 0.5rem;
          animation: fadeOut 2s forwards;
        `;
        document.body.appendChild(notification);
        setTimeout(() => notification.remove(), 2000);
      });
    }
  
    generateBtn.addEventListener('click', () => {
      passwordElements.forEach(el => {
        const password = generatePassword();
        el.textContent = password;
        
        // Add click-to-copy functionality
        el.addEventListener('click', () => copyToClipboard(password), { once: true });
      });
    });
  });