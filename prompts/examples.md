## Goal
To create a reproducible context in order to generate content in the same format. These are just guidelines, and you can use them as you see fit.

## GreenCap context
Before making a prompt, it could be useful to have a context, to make it easier to understand what the prompt is about, and what the expected output is, e.g.:

```
GreenCap is a sustainable venture capital firm dedicated to investing in start-ups that are committed to creating a more sustainable future. With a focus on environmentally responsible investments, GreenCap seeks to support innovative companies that are working towards the development of sustainable energy solutions, sustainable agriculture and food, green transportation, and business solutions for sustainability. As a firm, GreenCap values sustainability, innovation, and impact, and is committed to helping its portfolio companies reach their full potential while creating a more sustainable world.
```

## Examples

### Midjourney prompt generator
This is an example of a prompt that you can use to generate a new image, e.g, the image for a new product or icon: 

```
I want you to act as a prompt generator for Midjourney's artificial intelligence program. Your job is to provide detailed and creative descriptions that will inspire unique and interesting images from the AI. Keep in mind that the AI is capable of understanding a wide range of language and can interpret abstract concepts, so feel free to be as imaginative and descriptive as possible. For example, you could describe a scene from a futuristic city, or a surreal landscape filled with strange creatures. The more detailed and imaginative your description, the more interesting the resulting image will be.
```

Usage example:

```
Here is your first prompt: "A field of wildflowers stretches out as far as the eye can see, each one a different color and shape. In the distance, a massive tree towers over the landscape, its branches reaching up to the sky like tentacles."
```

### ChatGPT prompt generator
Another example, useful to changes things up a bit, in particular if the initial prompt is too long:

```
I want you to act as a ChatGPT prompt generator, I will send a topic, you have to generate a ChatGPT prompt based on the content of the topic, the prompt should start with "I want you to act as ", and guess what I might do, and expand the prompt accordingly Describe the content to make it useful.
```

Example of a too long prompt:
```
I want you to act as a content creator, please answer with only with the content I asked you to create. GreenCap is a venture capital firm that invests in green and eco-friendly start up ideas. You’re tasked with creating GreenCap's portfolio of sustainable investments, that means a bunch of start ups in the following areas: 
- Sustainable energy and technology: Green Capital invests in start-ups that focus on renewable energies, off-grid housing and energy solutions, portable solar-powered generators, and green data centers.
- Sustainable agriculture and food: Green Capital also invests in start-ups related to sustainable agriculture and farming, as well as backyard insect farming for sustainable protein intake.
- Green transportation: Start-ups related to green mobility, such as platform for river crossing for single bike users, are also in Green Capital's portfolio.
- Business solutions for sustainability: Green Capital also invests in start-ups related to carbon capture technology and virtual event and conference platform.
For each start up follow this format:
- Logo concept
- Headline
- Company description
- Product description
```

Using the chat gpt prompt generator to create a better prompt(s) from the one before (with some small tweaks):
```
I want you to act as a content creator for GreenCap's sustainable agriculture and food investments. Your task is to come up with a start-up idea related backyard insect farming for sustainable protein intake. Describe the start-up by creating a logo concept, a very long headline (at least 40 words), a company description (at least 300 words), and a product description (at least 300 words).
```

***Note:*** it's possible to generate the logo in midjourney, using the output of midjourney prompt generator, and the logo concept as input.

For other examples you can check the [awesome-chatgpt-prompts](github.com/f/awesome-chatgpt-prompts).

<!-- css to make soft wrap of text -->
<style>
  code {
    white-space : pre-wrap !important;
    word-break: break-word;
  }
</style>

