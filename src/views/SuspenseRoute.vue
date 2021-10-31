<template>
  <h1>I've been doing some async work before nicely rendering</h1>
</template>

<script>
function asyncSetTimeout(timeout) {
  return new Promise((res) => setTimeout(res, timeout));
}
export default {
  name: "Suspense route",
  async setup() {
    await asyncSetTimeout(5000);
  },
};
</script>
