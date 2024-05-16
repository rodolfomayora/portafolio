type ApiIntegration = {
  name: string,
  url: string
}

type SampleDataFrom = ApiIntegration;

type ProjectSummaryType = {
  id: string,
  title: string,
  mockupPath: string,
  category: string,
  developmentApproaches?: string,
  stack: string[],
  webType?: string,
  renderPatter?: string
  sourceCodeURL: string,
  deploymentPlatform: string,
  deployURL: string,
  dockerhubURL?: string,
  apiIntegration?: ApiIntegration,
  sampleDataFrom?: SampleDataFrom,
}

export default ProjectSummaryType;