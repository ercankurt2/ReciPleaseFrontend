<template>
  <nav class="navbar">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">ReciPlease</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link class="nav-link" to="/">HomeView</router-link>
          <router-link class="nav-link" to="/about">AboutView</router-link>
          <router-link class="nav-link" to="/recipes">RecipesView</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
.navbar {
  display: flex; /* Aktiviert Flexbox für dieses Element */
  align-items: center; /* Zentriert die Elemente vertikal im Container */
  justify-content: flex-start; /* Ausrichtung der Elemente am Anfang des Containers (links) */
  padding: 5px;  /* Entfernt fast den ganzen Innenabstand */
  margin: 5px;   /* Entfernt fast den ganzen Außenabstand */
  width: 350px;  /* Setzt die Breite auf 350px */
  position: absolute;  /* Positioniert die Navigation absolut */
  top: 5px;   /* Setzt die Navigation fast ganz oben an */
  left: 5px;  /* Setzt die Navigation fast ganz links an */
}

.navbar-brand {
  font-size: 40px;  /* Setzt die Schriftgröße der Überschrift der Navbar 40px */
}

.navbar-nav .nav-link {
  font-size: 40px;  /* Setzt die Schriftgröße der Elemente des Dropdown auf 40px */
  padding: 0.5rem 1rem; /* Größeres Padding für Links */
}
</style>