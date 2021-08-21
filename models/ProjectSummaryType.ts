type ApiIntegration = {
  name: string,
  url: string
}

type SampleDataFrom = ApiIntegration;

type ProjectSummaryType = {
  title: string,
  mockupPath: string,
  focusDevelopment: string,
  stack: string,
  webType: string,
  renderType?: string
  sourceCodeURL: string,
  deployURL: string,
  apiIntegration?: ApiIntegration,
  sampleDataFrom?: SampleDataFrom,
}

export default ProjectSummaryType;