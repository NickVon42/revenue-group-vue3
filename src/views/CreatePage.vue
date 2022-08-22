<script setup lang="ts">
import { fields, operators } from '@/constants';
import { v4 as uuidv4 } from "uuid";
import { reactive } from "vue";
import StyledInput from '../components/StyledInput.vue';
import { useRevenueGroupStore } from '../store/revenueGroupsStore';

const emit = defineEmits<{ (e: 'switchTab', tab: string): void }>()

const initialRule = (): Rule => ({
  id: uuidv4(),
  field: "",
  operator: "",
  parameters: [''],
  revenue: 0
})
const initialFormState = (): RevenueGroup => ({
  name: "",
  description: "",
  special: false,
  rules: [initialRule()],
})

const store = useRevenueGroupStore()
const formData = reactive<RevenueGroup>(initialFormState());

function testFunction() {
  alert(JSON.stringify(formData));
}

function addNewRevenueGroup() {
  store.addRevenueGroup({ ...formData })
  emit('switchTab', 'BrowsePage')
  Object.assign(formData, initialFormState())
}

function addRule() {
  formData.rules.push(initialRule());
}
function deleteRule(index: number) {
  formData.rules.splice(index, 1)
}

function addParameter(param: string, rule: Rule) {
  if (!param || rule.parameters.length >= 3) return
  rule.parameters.push('')
}
function deleteParameter(rule: Rule, index: number) {
  rule.parameters.splice(index, 1)
}

</script>

<template>
  <main class="m-10">

    <h1 class="text-2xl">Create Revenue Group</h1>

    <div class="my-5">
      <label class="text-lg mb-2">Group Name</label>
      <StyledInput v-model="formData.name" placeholder="Name" />
    </div>
    <div class="my-5">
      <label class="text-lg mb-2">Group Description</label>
      <textarea v-model="formData.description" placeholder="Add Description"
        class="block p-2.5 w-full text-sm text-gray-700 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500" />
    </div>
    <div class="flex-row">
      <input type="checkbox" v-model="formData.special" />
      <label class="text-sm ml-1 font-medium"> Special Group</label>
    </div>

    <div class="flex justify-between mt-10 mb-5 items-center">
      <p class="text-xl">Rules</p>
      <button @click="addRule" class="rounded-3xl bg-blue-100 text-blue-700 text-sm py-2 px-5">
        + Add
      </button>
    </div>

    <!-- RULES form inputs for revenue group -->
    <section v-for="(rule, index) in formData.rules" :key="rule.id"
      className=" border border-dashed rounded-md px-3 py-2 border-gray-300 min-h-[14em] mb-6 min-w-[800]">
      <div class="flex flex-row justify-between">
        {{ `Rule ${index + 1}` }}
        <button @click="deleteRule(index)">x</button>
      </div>
      <div className=" flex flex-row   h-10  mx-2 mt-3 mb-6 ">

        <p className=" text-md text-gray-700 mr-3">if</p>
        <select defaultValue="" v-model="rule.field"
          className=" w-full h-11 mr-3 text-sm text-gray-700 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500 ">
          <option value="">Select field</option>
          <option v-for="field in fields" :key="field" :value="field">
            {{ field }}
          </option>
        </select>
        <select defaultValue="" v-model="rule.operator"
          className="w-full mr-3 h-11 text-sm text-gray-700 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500 ">
          <option value="">Select operator</option>
          <option v-for="operator in operators" :key="operator" :value="operator">
            {{ operator }}
          </option>
        </select>


        <!-- PARAMETERS form inputs for rule -->
        <section class="w-full">
          <div class="w-full flex flex-row mb-2" v-for="(param, index) in rule.parameters" :key="index">
            <StyledInput v-model="rule.parameters[index]" placeholder="Enter Parameter" />
            <button v-if="index == 0" @click="addParameter(param, rule)" class="ml-3">✚</button>
            <button v-else @click="deleteParameter(rule, index)" class="ml-3">-</button>
          </div>
        </section>

      </div>
    </section>

    <button @click="testFunction" class="rounded-md bg-blue-300 border-blue-700 p-2 mr-5">
      Show data
    </button>
    <button @click="addNewRevenueGroup" class="rounded-md bg-blue-700 border-blue-700 text-white py-2 px-4">
      Submit
    </button>

  </main>
</template>

