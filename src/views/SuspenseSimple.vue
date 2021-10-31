<template>
  <Suspense>
    <template #default>
      <my-async-component :timeout="1000" />
    </template>
    <template #fallback>
      <span>Loading... Please wait 1s.</span>
    </template>
  </Suspense>
  <hr />
  <Suspense>
    <template #default>
      <my-async-component :timeout="2000" />
    </template>
    <template #fallback>
      <span>Loading... Please wait 2s.</span>
    </template>
  </Suspense>
  <hr />
  <h1 v-if="error">I failed to load</h1>
  <Suspense v-else>
    <template #default>
      <my-async-component :timeout="3000" should-fail />
    </template>
    <template #fallback>
      <span>Loading... Please wait 3s.</span>
    </template>
  </Suspense>
  <hr />
  <suspense-with-error>
    <template #default>
      <my-async-component :timeout="4000" should-fail />
    </template>
    <template #fallback>
      <span> Loading.. Please wait 4s. </span>
    </template>
    <template #error>
      <h1>I failed to load</h1>
    </template>
  </suspense-with-error>
</template>

<script>
import { ref } from "@vue/reactivity";
import MyAsyncComponent from "../components/MyAsyncComponent.vue";
import SuspenseWithError from "../components/SuspenseWithError.vue";
import { onErrorCaptured } from "@vue/runtime-core";
export default {
  name: "Suspense simple",
  components: { MyAsyncComponent, SuspenseWithError },
  setup() {
    const error = ref(null);

    onErrorCaptured((err) => {
      error.value = err;

      return true;
    });

    return { error };
  },
};
</script>
