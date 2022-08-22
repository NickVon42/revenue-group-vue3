<script setup lang="ts">

interface Props {
    modelValue: string, placeholder?: string
}
withDefaults(defineProps<Props>(), {
    placeholder: 'Enter Text'
})
const emit = defineEmits<{ (e: 'update:modelValue', event: string): void }>()

</script>

<template>
    <input :placeholder="placeholder" :value="modelValue"
        @change="emit('update:modelValue', ($event.target as HTMLInputElement).value)" placeholder="Name"
        class="block p-2.5 w-full text-sm text-gray-700 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500" />
</template>