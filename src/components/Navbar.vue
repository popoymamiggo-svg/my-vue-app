<template>
  <header class="navbar-wrapper">
    <div class="brand-block">
      <img src="../assets/WMO.png" alt="WMO Logo" class="brand-logo" />
      <div class="brand-text">
        <h1 class="uni-title">World Medical School</h1>
        <p class="uni-motto">SCIENCE • HEALTH • FAITH</p>
      </div>
    </div>

    <nav class="navigation-links">
      <RouterLink to="/" class="nav-link">
        Home
      </RouterLink>

      <a href="#" @click.prevent class="nav-link">About</a>

      <RouterLink to="/admission" class="nav-link">
        Admissions
      </RouterLink>
      <RouterLink to="/sample-data" class="nav-link">
        Sample Data
      </RouterLink>
      <RouterLink to="/sample-methods" class="nav-link">
        Methods
      </RouterLink>
      <RouterLink to="/sample-vmodel" class="nav-link">
        V-model
      </RouterLink>

      <a href="#" @click.prevent class="nav-link">Academics</a>
      <a href="#" @click.prevent class="nav-link">Campus Life</a>
      <a href="#" @click.prevent class="nav-link">News</a>
      <a href="#" @click.prevent class="nav-link">Contact</a>
    </nav>

    <div class="action-block">
      <button class="portal-cta">Portal Login</button>
    </div>
  </header>
</template>

<style scoped>
.navbar-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem 5rem;
  background-color: #ffffff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.02);
}

.brand-block {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand-logo {
  width: 54px;
  height: 54px;
  object-fit: contain;
}

.uni-title {
  font-size: 1.35rem;
  color: #0F766E;
  margin: 0;
  font-weight: 700;
  font-family: serif;
}

.uni-motto {
  font-size: 0.75rem;
  color: #0F766E;
  letter-spacing: 2px;
  margin: 0;
  font-weight: 700;
}

.navigation-links {
  display: flex;
  gap: 1.5rem;
}

.nav-link {
  text-decoration: none;
  color: #C8A100;
  font-size: 0.88rem;
  font-weight: 500;
  padding: 6px 0;
  border-bottom: 3px solid transparent;
  transition: all 0.15s ease;
  cursor: pointer;
}

.nav-link:hover {
  color: #064E3B;
  font-weight: bold;
  border-bottom: 3px solid #C8A100;
}

.portal-cta {
  background-color: #064E3B;
  color: #ffffff;
  border: none;
  padding: 0.7rem 1.6rem;
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
}
</style>