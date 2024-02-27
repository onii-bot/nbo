<template>
  <section id="about" class="section-about">
    <div class="text-center mb-20">
      <h2 class="heading-secondary " data-aos="fade-up">New Bitcoin Order Manifesto</h2>
    </div>
    <div class="container-about text-center" data-aos="fade-right">
      <img
        class="camel-photo mx-auto mb-32"
        src="https://pbs.twimg.com/profile_images/1759699619166961664/gYkyv1K9_400x400.jpg"
        alt="camel"
      />
      <div class="faq mb-[10rem]" v-for="item in faq" :key="item.question">
        <h3 class="heading-tertiary  mb-5" data-aos="fade-up">
          {{ item.question }}
        </h3>
        <p class="paragraph mx-[4%]" data-aos="fade-up">
          {{ item.answer }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "my-about",
  data() {
    return {
      faq: [
        {
          question: "",
          answer:
            "• The NBO project is a collection of 666 digital artifacts that celebrate the history and mythology of the Illuminati, one of the most famous and controversial secret societies in the world. The entire project isn't based on the Illuminati, but more or less the ideals and brotherhood it represents when you're a part of a tight-knit social community. These artifacts are minted on the Bitcoin blockchain using the Ordinals protocol, which ensures that they are provably scarce and tamper-proof.",
        },
        {
          question: "",
          answer: "• New Bitcoin Order is not just about collecting digital artifacts. It is also about promoting freedom of thought, expression, and challenging the status quo. The artifacts in this collection are a way to explore the hidden truths of the world and to connect with others who share a passion for conspiracy theories and anti-government activism.",
        },
        {
          question: "",
          answer: "• We believe that NBO will be a powerful tool for spreading awareness about the decentralization of EVERYTHING away from the government's control while promoting the values of freedom, truth, and justice. We invite you to join us on this journey and to help us build a better world one sat at a time.",
        },
      ],
    };
  },
};
</script>
