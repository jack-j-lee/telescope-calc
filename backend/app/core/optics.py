import math

def airy_disk_diameter_m(f_number: float, wavelength_m: float) -> float:
    # Airy disk diameter (first zero-to-zero) in the focal plane:
    # d = 2.44 * lambda * F#
    return 2.44 * wavelength_m * f_number


def field_of_view_rad(sensor_dimension_mm: float, focal_length_mm: float) -> float:
    # Field of View in radians:
    # FOV = 2 * arctan(sensor_dimension / (2 * focal_length))
    return 2 * math.atan(sensor_dimension_mm / (2 * focal_length_mm))


def field_of_view_deg(sensor_dimension_mm: float, focal_length_mm: float) -> float:
    # Field of View in degrees
    return math.degrees(field_of_view_rad(sensor_dimension_mm, focal_length_mm))


def angular_resolution_arcsec_per_pixel(fov_deg: float, pixels: int) -> float:
    # Angular resolution: FOV divided by number of pixels, converted to arcseconds
    # 1 degree = 3600 arcseconds
    return (fov_deg / pixels) * 3600


def magnification(telescope_focal_length_mm: float, eyepiece_focal_length_mm: float) -> float:
    # Magnification = Telescope Focal Length / Eyepiece Focal Length
    return telescope_focal_length_mm / eyepiece_focal_length_mm