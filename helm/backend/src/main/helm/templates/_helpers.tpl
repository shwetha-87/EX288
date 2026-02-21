{{- define "customer-backend.name" -}}
{{ .Chart.Name }}
{{- end }}

{{- define "customer-backend.fullname" -}}
{{ .Release.Name }}
{{- end }}

{{- define "customer-backend.labels" -}}
app: {{ include "customer-backend.name" . }}
stage: {{ .Values.stage }}
{{- end }}
