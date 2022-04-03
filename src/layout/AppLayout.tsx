import "./AppLayout.scss"

type AppLayoutProps = {
  children: React.ReactChild
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return <div className="AppLayout">{children}</div>
}
export default AppLayout
