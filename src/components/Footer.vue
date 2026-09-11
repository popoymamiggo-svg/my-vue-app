<template>
  <footer class="app-footer">
    <div class="footer-container">
      <div class="footer-section">
        <h3>Important Links</h3>
        <ul>
          <li><a href="#">Admissions</a></li>
          <li><a href="#">Academics</a></li>
          <li><a href="#">Campus Life</a></li>
          <li><a href="#">Portal</a></li>
        </ul>
      </div>

      <div class="footer-section">
        <h3>Contact Us</h3>
        <p>Example Address</p>
        <p>Phone: 123456789</p>
        <p>Email: oknanigurosir@gmail.com</p>
      </div>

      <div class="footer-section">
        <h3>Follow Us</h3>
        <ul class="social-links">
          <li><a href="#">Facebook</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2026 University Name. All rights reserved.</p>
    </div>
  </footer>
</template>

<style scoped>
.app-footer {
  background-color: #064E3B;
  color: #D1FAE5;
  padding: 40px 0 20px;
  font-family: Arial, Helvetica, sans-serif;
}

.footer-container {
  max-width: 960px;
  margin: 0 auto;
  padding: 0 24px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.footer-section h3 {
  color: #ffffff;
  font-size: 16px;
  margin-bottom: 8px;
}

.footer-section a {
  color: #A7F3D0;
  text-decoration: none;
  font-size: 14px;
}

.footer-section a:hover {
  color: #ffffff;
}

.footer-section p {
  font-size: 14px;
  margin: 0 0 8px;
  color: #A7F3D0;
}

.footer-bottom {
  max-width: 960px;
  margin: 32px auto 0;
  padding: 16px 24px 0;
  border-top: 1px solid #166534;
  text-align: center;
  font-size: 13px;
  color: #A7F3D0;
}

@media (max-width: 640px) {
  .footer-container {
    grid-template-columns: 1fr;
  }
}
</style>