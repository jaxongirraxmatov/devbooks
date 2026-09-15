import { Link } from 'react-router-dom'
import AuthLayout, { AuthField } from '../components/AuthLayout'

/** Kirish sahifasi — Figmadagi ikki ustunli oq/bej maket */
export default function SignIn() {
  return (
    <AuthLayout illustration="login">
      <h1 className="font-sans text-4xl font-bold text-navy">Sign in</h1>
      <p className="mt-2 text-sm text-slate-500">
        Do not you have an account?{' '}
        <Link to="/royxat" className="text-sky-600 hover:underline">
          Sign up
        </Link>
      </p>

      <form
        className="mt-8 space-y-4"
        onSubmit={(e) => {
          e.preventDefault()
        }}
      >
        <AuthField name="email" type="email" placeholder="Email" />
        <AuthField name="password" type="password" placeholder="Password" />

        <button
          type="submit"
          className="mt-4 h-12 w-full rounded-lg bg-navy font-semibold text-white transition-opacity hover:opacity-90"
        >
          Next step
        </button>
      </form>
    </AuthLayout>
  )
}
