import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Landing } from '../Landing'
import '../../i18n'

describe('Landing', () => {
  it('renders the title', () => {
    render(<Landing onFilesSelected={() => {}} onModelLoaded={() => {}} />)
    expect(screen.getByText('DICOM till 3D')).toBeInTheDocument()
  })

  it('renders the folder picker', () => {
    render(<Landing onFilesSelected={() => {}} onModelLoaded={() => {}} />)
    expect(screen.getByText(/välj dicom-mapp/i)).toBeInTheDocument()
  })

  it('renders the privacy notice', () => {
    render(<Landing onFilesSelected={() => {}} onModelLoaded={() => {}} />)
    expect(screen.getByText(/dina data stannar lokalt/i)).toBeInTheDocument()
  })

  it('renders the load saved model button', () => {
    render(<Landing onFilesSelected={() => {}} onModelLoaded={() => {}} />)
    expect(screen.getByText(/öppna sparad modell/i)).toBeInTheDocument()
  })
})
