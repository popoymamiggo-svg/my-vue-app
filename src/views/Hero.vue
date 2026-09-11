<template>
<main class="hero-layout">
<div class="content-side">
<span class="prefix-badge">EXCELLENCE IN HEALTH SCIENCES</span>

<h1 class="main-heading">
Advancing <span class="italic-gold">Medicine</span><br />
Through Science and Faith.
</h1>

<p class="summary-paragraph">
A world-class medical institution dedicated to advancing healthcare through
innovative medical education, scientific research, and compassionate patient
care. <span class="brand-highlight">World Medical School</span> prepares future
healthcare professionals to meet the evolving needs of communities around the
globe.
</p>

<div class="button-wrapper">
        <button class="solid-purple-btn">Explore Academics</button>
        <button class="outline-purple-btn">Request Information</button>
      </div>

<div class="metrics-container">
<div class="stat-box">
<h2>118+</h2>
<p>Years of Excellence</p>
</div>

<div class="stat-box">
<h2>20+</h2>
<p>Health & Academic Programs</p>
</div>

<div class="stat-box">
<h2>5,000+</h2>
<p>Students & Future Professionals</p>
</div>

<div class="stat-box">
<h2>20+</h2>
<p>Healthcare Partnerships</p>
</div>
</div>
</div>

<div class="visual-side">
<div class="brand-gradient-card">
<img src="../assets/WMO.png" alt="WMO Badge" class="card-badge-logo" />

<h3 class="card-brand-title">
World Medical School
</h3>

<p class="card-brand-subtext">
SCIENCE • HEALTH • FAITH
</p>

<div class="card-quote-block">
<p>"Healing Through Knowledge,</p>
<p>Serving Through Faith"</p>
</div>
</div>
</div>
</main>
</template>

<style scoped>
.hero-layout {
display: grid;
grid-template-columns: 1.15fr 0.95fr;
gap: 4.5rem;
min-height: 52vh;
padding: 4vh 5.5rem;
max-width: 1320px;
margin: 0 auto;
align-items: center;
}

.prefix-badge {
color: #0F766E;
font-weight: 700;
letter-spacing: 1.2px;
font-size: 0.82rem;
display: block;
margin-bottom: 1.1rem;
}

.prefix-badge::before {
content: "— ";
}

.main-heading {
font-size: 3.1rem;
line-height: 1.15;
color: #064E3B;
margin: 0 0 1.3rem 0;
font-weight: 700;
font-family: serif;
}

.italic-gold {
color: #0F766E;
font-style: italic;
}

.summary-paragraph {
font-size: 0.98rem;
line-height: 1.55;
color: #444444;
margin-bottom: 1.7rem;
max-width: 510px;
}

.brand-highlight {
color: #0F766E;
font-weight: 700;
}

.button-wrapper {
display: flex;
gap: 1.2rem;
margin-bottom: 2.4rem;
}

.solid-purple-btn {
background-color: #064E3B;
color: #ffffff;
border: none;
padding: 0.85rem 2.2rem;
border-radius: 8px;
font-weight: 700;
font-size: 0.92rem;
cursor: pointer;
}

.outline-purple-btn {
background-color: transparent;
color: #064E3B;
border: 1.5px solid #064E3B;
padding: 0.85rem 2.2rem;
border-radius: 8px;
font-weight: 700;
font-size: 0.92rem;
cursor: pointer;
}

.metrics-container {
display: grid;
grid-template-columns: repeat(4, 1fr);
background-color: #ffffff;
padding: 1.35rem 1rem;
border-radius: 14px;
box-shadow: 0 4px 18px rgba(0, 0, 0, 0.03);
border: 1px solid #CCFBF1;
}

.stat-box {
text-align: center;
border-right: 1px solid #E5E7EB;
}

.stat-box:last-child {
border-right: none;
}

.stat-box h2 {
font-size: 1.35rem;
color: #0F766E;
margin: 0 0 5px 0;
font-weight: 800;
}

.stat-box p {
font-size: 0.7rem;
color: #777777;
margin: 0;
font-weight: 500;
}

.brand-gradient-card {
background: linear-gradient(
135deg,
#0F766E 0%,
#F0FDFA 48%,
#FFFFFF 100%
);
border-radius: 22px;
padding: 2.8rem 2.2rem;
text-align: center;
box-shadow: 0 25px 55px rgba(0, 0, 0, 0.04);
display: flex;
flex-direction: column;
align-items: center;
border: 1px solid #CCFBF1;
}

.card-badge-logo {
width: 105px;
height: 105px;
margin-bottom: 1.4rem;
object-fit: contain;
}

.card-brand-title {
color: #064E3B;
font-size: 1.75rem;
margin: 0 0 0.45rem 0;
font-weight: 700;
max-width: 310px;
line-height: 1.25;
font-family: serif;
}

.card-brand-subtext {
color: #0F766E;
font-size: 0.82rem;
font-weight: 700;
letter-spacing: 2.2px;
margin-bottom: 1.8rem;
}

.card-quote-block p {
margin: 0;
font-style: italic;
color: #c8a100;
font-size: 1.02rem;
line-height: 1.45;
}
</style>