<script lang="ts" setup>
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Card from 'primevue/card'
import { useRouter } from 'vue-router'

const router = useRouter()
const navigate = (path: string) => {
  router.push(path)
}
const scrollDown = () => {
  const infoSection = document.querySelector('.additional-info')
  if (infoSection) {
    infoSection.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <nav class="navbar">
    <div class="navbar-center">
      <InputText placeholder="Search..." class="search-bar" />
    </div>
    <div class="sign-in-button">
      <Button label="Sign In" @click="navigate('/login')" />
    </div>
  </nav>
  <div class="container wrapper">
    <div class="header">
      <h1 class="main-text">A place for your learning cards</h1>
      <p class="side-text">
        Join our coeducational community! Learn together, share your flashcards sets and create pathways for
        development.... completely free of charge! Join us now.
      </p>
      <div class="card flex justify-center">
        <Button label="Sign Up" @click="navigate('/sign-up')" icon="pi pi-arrow-right" />
      </div>
    </div>
    <div class="landing-page-img-div">
      <img
        width="1000"
        src="https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fdbf03337-55d1-4aa1-8a88-539da17d216e_1647x1208.png"
      />
    </div>
  </div>
  <div class="scroll-arrow" @click="scrollDown">&#x25BC;</div>
  <div class="additional-info">
    <h2 style="margin-top: 2rem; line-height: 1.2em; font-weight: 800">
      Focus on LEARNING, it was never that much fun
    </h2>
    <p style="margin-top: 2rem; max-width: 700px; margin-left: auto; margin-right: auto; font-weight: 500">
      We are guided by innovative learning methods, but if you wish you will also find learning opportunities that you
      have already explored during your education. On our platform, you will be able to benefit from the opportunities
      that tools such as...
    </p>
    <div class="cards">
      <!-- Na dniach przesortuję na jeden element który będę eksportował -->
      <Card
        style="
          width: 25rem;
          overflow: hidden;
          width: 380px;
          height: 530px;
          display: flex;
          margin-top: 8rem;
          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        "
        class="card__props"
      >
        <template #header> </template>
        <template #title>Advanced Card</template>
        <template #subtitle>Card subtitle</template>
        <template #content>
          <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
            numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse,
            cupiditate neque quas!
          </p>
        </template>
      </Card>
      <Card
        style="
          width: 25rem;
          overflow: hidden;
          width: 380px;
          height: 530px;
          display: flex;
          margin-top: 8rem;
          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        "
        class="card__props"
      >
        <template #header> </template>
        <template #title>Advanced Card</template>
        <template #subtitle>Card subtitle</template>
        <template #content>
          <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
            numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse,
            cupiditate neque quas!
          </p>
        </template>
      </Card>
      <Card
        style="
          width: 25rem;
          overflow: hidden;
          width: 380px;
          height: 530px;
          display: flex;
          margin-top: 8rem;
          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        "
        class="card__props"
      >
        <template #header> </template>
        <template #title>Advanced Card</template>
        <template #subtitle>Card subtitle</template>
        <template #content>
          <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
            numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse,
            cupiditate neque quas!
          </p>
        </template>
      </Card>
    </div>
  </div>
  <footer class="footer">
    <p>&copy; 2024 policards</p>
  </footer>
</template>

<!-- Proszę mi nie poprawiać styli, wiem że są do uregulowania pod kątem importów kolorów, jednostek itd. Wiem o tym i to poprawię :) -->
<style lang="scss" scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.container {
  background-color: #29353d;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: start;
  height: 100vh;
  font-family: 'Montserrat', sans-serif;
  opacity: 0;
  animation: fadeIn 1s ease-in-out forwards;
}

.navbar {
  color: white;
  font-family: 'Montserrat', sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 0;
  background-color: #1c252c;
}

.navbar-center {
  flex-grow: 1;
  display: flex;
  justify-content: center;
}

.search-bar {
  width: 300px;
  background-color: #3b4a56;
  border: none;
  color: white;
}

.sign-in-button {
  border: none;
  margin-right: 1rem;
}

.header {
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  padding-left: 4rem;
  padding-top: 4rem;
}

.main-text {
  font-size: 90px;
  font-weight: 900;
  line-height: 1.2em;
  margin: 0 0 20px 0;
  max-width: 600px;

  // To też ujednolicę żeby nie było powtórzone i nie na swoim miejscu
  @media (max-width: 480px) {
    font-size: 35px;
    max-width: 100%;
  }
}

.side-text {
  font-size: 22px;
  font-weight: 500;
  line-height: 1.2em;
  margin: 20px 0 20px 0;
  max-width: 500px;

  @media (max-width: 480px) {
    font-size: 16px;
    max-width: 100%;
  }
}

.landing-page-img-div {
  padding-right: 2rem;
  padding-top: 4rem;
}

.wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  grid-auto-rows: minmax(100px, auto);
}

.scroll-arrow {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 30px;
  color: white;
  cursor: pointer;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateX(-50%) translateY(0);
  }
  40% {
    transform: translateX(-50%) translateY(-10px);
  }
  60% {
    transform: translateX(-50%) translateY(-5px);
  }
}

.additional-info {
  background-color: #1c252c;
  padding-top: 50px;
  text-align: center;
  min-height: 100vh;
  font-family: 'Montserrat', sans-serif;
}

.cards {
  display: flex;
  flex-flow: row wrap;
  gap: 2rem;
  justify-content: space-evenly;
}

.card__props:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.footer {
  background-color: #1c252c;
  color: white;
  text-align: center;
  padding: 20px;
  font-family: 'Montserrat', sans-serif;
}

@media (max-width: 768px) {
  .wrapper {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, auto);
  }
  .landing-page-img-div {
    display: none;
  }
}
</style>
