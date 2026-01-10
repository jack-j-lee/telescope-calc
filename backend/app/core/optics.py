def airy_disk_diameter_m(f_number: float, wavelength_m: float) -> float:
    # Airy disk diameter (first zero-to-zero) in the focal plane:
    # d = 2.44 * lambda * F#
    return 2.44 * wavelength_m * f_number