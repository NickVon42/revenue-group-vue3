import { defineStore } from 'pinia'

export const useRevenueGroupStore = defineStore('revenueGroups', {
    state: () => ({
        revenueGroups: [] as RevenueGroup[],
    }),
    getters: {
        getMaxParamCount(state) {
            return (groupIndex: number) => state.revenueGroups[groupIndex].rules.reduce((prev, cur) => Math.max(prev, cur.parameters.length), 0)
        }
    },
    actions: {
        addRevenueGroup(newGroup: RevenueGroup) {
            this.revenueGroups.push(newGroup)
        },

    },
})