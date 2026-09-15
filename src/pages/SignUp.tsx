import { Link } from 'react-router-dom'
import AuthLayout, { AuthField } from '../components/AuthLayout'

/** Ro'yxatdan o'tish sahifasi */
export default function SignUp() {
  return (
    <AuthLayout illustration="register">
      <h1 className="font-sans text-4xl font-bold text-navy">Sign up</h1>
      <p className="mt-2 text-sm text-slate-500">
        Already have an account?{' '}
        <Link to="/kirish" className="text-sky-600 hover:underline">
          Sign in
        </Link>
      </p>

      <form
        className="mt-8 space-y-4"
        onSubmit={(e) => {
          e.preventDefault()
        }}
      >
        <AuthField name="firstName" placeholder="First name" />
        <AuthField name="lastName" placeholder="Last name" />
        <AuthField name="phone" type="tel" placeholder="Phone" />
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
