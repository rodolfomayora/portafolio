type ApiIntegration = {
  name: string,
  url: string
}

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
}

export default ProjectSummaryType;