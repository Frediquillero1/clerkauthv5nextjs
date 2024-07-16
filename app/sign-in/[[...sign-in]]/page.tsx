import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className='flex items-center justify-center h-full'>
      <SignIn appearance={{ baseTheme: 'shadesOfPurple' }} afterSignOutUrl='/' />
    </div>
  )
}
