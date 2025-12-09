import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_with-header/gamedev')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/gamedev"!</div>
}
