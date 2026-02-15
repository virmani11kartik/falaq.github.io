from PIL import Image, ImageFilter

def enhance_image(input_path, output_path, scale=2):

    # Load image
    img = Image.open(input_path)

    # Convert to RGB if image has alpha channel
    if img.mode == "RGBA":
        img = img.convert("RGB")

    # Upscale using high-quality resampling
    upscaled = img.resize(
        (img.width * scale, img.height * scale),
        Image.LANCZOS
    )

    # Apply subtle sharpening
    enhanced = upscaled.filter(
        ImageFilter.UnsharpMask(radius=2, percent=150, threshold=3)
    )

    # Save result
    enhanced.save(output_path, quality=95)

    print("Enhanced image saved to:", output_path)

# main
if __name__ == "__main__":
    # input images in ws root /public/images/looks
    WS_ROOT = "/home/kartik/falaq.github.io"
    input_image_path = f"{WS_ROOT}/public/images/looks/party-glam.jpg"
    output_image_path = f"{WS_ROOT}/public/images/looks/enhanced.png"
    enhance_image(input_image_path, output_image_path, scale=2)