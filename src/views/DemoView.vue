<script setup lang="ts">
import axios from 'axios';
import { createWorkflowConfig, DCWorkflow } from '@zlxiao97/workflow-engine';
import type { WorkflowData } from '@zlxiao97/workflow-engine';

const config = createWorkflowConfig((config) => {
  config.setService({
    baseAPI: '/api',
    request: ({ url, method }) => axios({ url, method }).then((res) => res.data),
  });
});

const submit = (data: WorkflowData) => {
  console.log(data);
};
</script>

<template>
  <h1 class="title">
    组件客户端代码示例
  </h1>
  <DCWorkflow
    class="custom-workflow"
    :config="config"
    :model-id="$route.query.id as string"
    @submit="submit"
  >
    <template #default="{ graphData }">
      <el-button
        type="primary"
        @click="submit(graphData)"
      >
        提交
      </el-button>
    </template>
  </DCWorkflow>
</template>

<style scoped>
.title {
  text-align: center;
}
.custom-workflow {
  border: 1px dotted red;
  max-width: 75vw;
  margin: 0 auto;
}
</style>
