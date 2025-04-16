// src/app/sections/Blog.tsx
import Section from "@components/layout/Section";
import Text from "@components/ui/Text";

export default function Blog() {
  return (
    <Section
      id="blog"
      title="Latest Articles"
      titleLoop={["Frontend tips", "React tricks", "CSS love"]}
    >
      <Text variant="body" color="secondary">
        Coming soon: a collection of my thoughts, tutorials and experiments.
      </Text>
    </Section>
  );
}
