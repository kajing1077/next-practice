import type { Session } from '@supabase/auth-helpers-nextjs'


const SessionLink = ({ session }: { session: Session | null }) => {
  return session ? (
    <a href="/logout" className="text-sm font-semibold leading-6 text-gray-900">
      Log out <span aria-hidden="true">&rarr;</span>
    </a>
  ) : (
    <a href="/signup" className="text-sm font-semibold leading-6 text-gray-900">
      Sign up <span aria-hidden="true">&rarr;</span>
    </a>
  )
}

export default SessionLink;