import { del } from 'idb-keyval'

// Earlier versions saved generated geometry in IndexedDB automatically.
// Keep this cleanup to remove that legacy data, without saving new sessions.
const SESSION_KEY = 'dicomdrift-session'

export async function clearSession(): Promise<void> {
  await del(SESSION_KEY)
}
