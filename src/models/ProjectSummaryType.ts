type ApiIntegration = {
  name: string,
  url: string
}

type SampleDataFrom = ApiIntegration;

type ProjectSummaryType = {
  title: string,
  mockupPath: string,
  category: string,
  developmentApproaches?: string,
  stack: string,
  webType?: string,
  renderType?: string
  sourceCodeURL: string,
  deploymentPlatform: string,
  deployURL: string,
  apiIntegration?: ApiIntegration,
  sampleDataFrom?: SampleDataFrom,
}

export default ProjectSummaryType;