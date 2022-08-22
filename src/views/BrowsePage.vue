<script setup lang="ts">
import { useRevenueGroupStore } from '@/store/revenueGroupsStore';
import { storeToRefs } from 'pinia';

const store = useRevenueGroupStore()
const { revenueGroups } = storeToRefs(store)

</script>

<template>
    <div>
        <div v-for="(group, index) in revenueGroups" :key="group.name" class="w-3/3 m-10">
            <table class=" table-auto ">
                <thead>
                    <tr>
                        <th>Rule</th>
                        <th>Field</th>
                        <th>Operator</th>
                        <th v-for="n in  store.getMaxParamCount(index)">{{ `Parameter ${n}` }}</th>
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
    </div>
</template>
