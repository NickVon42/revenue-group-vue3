<script setup lang="ts">
import { computed } from 'vue';

const { group } = defineProps<{ group: RevenueGroup }>()
const possibleParamCount = computed(() => group.rules.reduce((acc, cur) => Math.max(acc, cur.parameters.length), 0))

</script>

<template>

    <div class="w-3/3 m-10">

        <table class=" table-auto ">
            <thead>
                <tr>
                    <th>Rule</th>
                    <th>Field</th>
                    <th>Operator</th>
                    <th v-for="n in possibleParamCount">{{ `Parameter ${n}` }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(rules, index) in group.rules" :key="rules.id">
                    <td>{{ index + 1 }}</td>
                    <td>{{ rules.field }}</td>
                    <td>{{ rules.operator }}</td>
                    <td v-for="param in rules.parameters" :key="param">{{ param }}</td>
                </tr>

            </tbody>
        </table>

    </div>
</template>