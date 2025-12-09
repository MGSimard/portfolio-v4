import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/gamedev')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/gamedev"!</div>
}
