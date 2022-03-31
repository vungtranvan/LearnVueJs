<template>
  <h1 v-bind:id="headingId">Heading</h1>
  <button v-bind:disabled="isDisabled">Ok 123</button>
  <h2 class="underline">Color text binding 1</h2>
  <h2 class="underline" v-bind:class="status">Color text binding 2</h2>
  <h2 :class="isPromoted && 'promoted'">Color text binding 3</h2>
  <h2 :class="isPromoted ? 'promoted' : 'underline'">Color text binding 4</h2>
  <h2 v-bind:class="['promoted', 'status']" v-show="isShown">
    Color text binding 5
  </h2>
  <h2 v-bind:class="['promoted', 'status']" v-if="isShown">
    Color text binding 5
  </h2>
  <ul>
    <li v-for="p in products" :key="p">{{ p }}</li>
  </ul>
  <br />
  <ul>
    <li v-for="f in fullNames" :key="f.firstName">
      {{ f.firstName }} - {{ f.lastName }}
    </li>
  </ul>
  <h1>{{ add(2, 5) }}</h1>
  <input type="text" v-model="fullName1" />
  <button @click="changName()">change show</button>
  <br />

  <h1>Form</h1>
  <div>
    <pre>{{ JSON.stringify(formValues, null, 2) }}</pre>
  </div>

  <form @submit.prevent="submitForm">
    <div>
      <label for="name">Name</label>
      <input type="text" id="name" v-model.trim.lazy="formValues.name.value" />
    </div>

    <div>
      <label for="profile">Profile Summary</label>
      <textarea type="text" id="profile" v-model="formValues.profile.value" />
    </div>

    <div>
      <label for="country">Country</label>
      <select name="country" id="country" v-model="formValues.country.value">
        <option value="">Select country</option>
        <option value="vietnam">VietNam</option>
        <option value="lao">Lao</option>
        <option value="thailan">Thai Lan</option>
      </select>
    </div>

    <div>
      <label for="age">age</label>
      <input type="number" id="age" v-model.number="formValues.age.value" />
    </div>

    <div>
      <label for="jodLocation">jodLocation</label>
      <select
        name="jodLocation"
        multiple
        id="jodLocation"
        v-model="formValues.jodLocation.value"
      >
        <option value="">Select jodLocation</option>
        <option value="vietnam">VietNam</option>
        <option value="lao">Lao</option>
        <option value="thailan">Thai Lan</option>
      </select>
    </div>

    <div>
      <input
        type="checkbox"
        id="remoteWork"
        v-model="formValues.remoteWork.value"
        true-value="yes"
        false-value="no"
      />
      <label for="remoteWork">Open to remote work ?</label>
    </div>

    <div>
      <label>Skill</label>
      <input
        type="checkbox"
        id="html"
        value="html"
        v-model="formValues.skinSet.value"
      />
      <label for="html">Html</label>
      <input
        type="checkbox"
        id="css"
        value="css"
        v-model="formValues.skinSet.value"
      />
      <label for="css">Css</label>
      <input
        type="checkbox"
        id="javascript"
        value="javascript"
        v-model="formValues.skinSet.value"
      />
      <label for="javascript">Javascript</label>
    </div>

    <div>
      <label>gender</label>
      <input
        type="radio"
        id="female"
        value="female"
        v-model="formValues.gender.value"
      />
      <label for="female">female</label>
      <input
        type="radio"
        id="male"
        value="male"
        v-model="formValues.gender.value"
      />
      <label for="male">male</label>
    </div>
    <div>
      <button type="submit">Lưu</button>
    </div>
  </form>
  <br />

  <!-- Computed Properties -->
  <h2>Total price {{ total }}</h2>
  <button @click="items.push({ id: 5, name: 'bi5', price: 50 })">
    Add item
  </button>
  <br />

  <!-- Vue JS 3 Tutorial - 27 - Watchers -->
  <p>(0-20) {{ volume }}</p>
  <button @click="volume += 2">Increment volume</button>
  <button @click="volume -= 2">Decrement volume</button>
</template>

<script>
import { ref, computed, reactive, watch } from "vue";
export default {
  setup() {
    const name = ref("");
    const profile = ref("");
    const country = ref("");
    const jodLocation = ref([]);
    const skinSet = ref([]);
    const remoteWork = ref("no");
    const gender = ref("");
    const age = ref(null);
    const volume = ref(0);
    const items = reactive([
      { id: 1, name: "Bi1", price: 100 },
      { id: 2, name: "bi2", price: 14 },
      { id: 3, name: "Bi3", price: 25 },
      { id: 4, name: "Bi4", price: 36 },
    ]);

    function submitForm(event) {
      event.preventDefault();
      console.log(this.formValues);
    }
    function add(a, b) {
      return a + b;
    }
    function changName() {
      this.fullName1 = "Vung Tran";
    }

    const total = computed(() => {
      return items.reduce((total, curr) => (total += curr.price), 0);
    });

    const firstName1 = ref("John");
    const lastName1 = ref("Doe");

    const fullName1 = computed({
      // getter
      get() {
        return firstName1.value + " " + lastName1.value;
      },
      // setter
      set(newValue) {
        // Note: we are using destructuring assignment syntax here.
        [firstName1.value, lastName1.value] = newValue.split(" ");
      },
    });

    watch(volume, async (newVolume, oldVolume) => {
      if (newVolume > oldVolume && newVolume ===16) {
        alert('Qua am luong r')
      }
    });
    return {
      volume,
      fullName1,
      items,
      headingId: 0,
      isDisabled: true,
      status: "active",
      isPromoted: false,
      isShown: false,
      products: ["ao", "ao", "quan", "mu", "dep", "non"],
      fullNames: [
        { firstName: "Tran", lastName: "Vung" },
        { firstName: "Ba", lastName: "Tu" },
        { firstName: "Tranh", lastName: "Bi" },
      ],
      formValues: {
        name,
        profile,
        country,
        jodLocation,
        remoteWork,
        skinSet,
        gender,
        age,
      },
      add,
      changName,
      submitForm,
      total,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
.underline {
  color: #2c3e;
}
.active {
  text-decoration: underline;
}
.promoted {
  color: red;
}
</style>
