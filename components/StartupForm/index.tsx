"use client";

import { useState } from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import dynamic from "next/dynamic";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

const StartupForm = () => {
  const [error, setError] = useState<Record<string, string>>({});
  const [pitch, setPitch] = useState<string>("");

  return (
    <form action={() => {}} className="startup-form">
      <div>
        <label htmlFor="title" className="startup-form_label">
          Title
        </label>
        <Input
          id="title"
          name="title"
          className="startup-form_input"
          required
          placeholder="Startup Title"
        />

        {error.title && <p className="startup-form_error">{error.title}</p>}
      </div>

      <div>
        <label htmlFor="description" className="startup-form_label">
          Description
        </label>
        <Textarea
          id="description"
          name="description"
          className="startup-form_textarea"
          required
          placeholder="Startup Description"
        />

        {error.description && (
          <p className="startup-form_error">{error.description}</p>
        )}
      </div>

      <div>
        <label htmlFor="category" className="startup-form_label">
          Category
        </label>
        <Input
          id="category"
          name="category"
          className="startup-form_input"
          required
          placeholder="Startup Category (Tech, Health, Life Style, etc)"
        />

        {error.category && (
          <p className="startup-form_error">{error.category}</p>
        )}
      </div>

      <div>
        <label htmlFor="link" className="startup-form_label">
          Image URL
        </label>
        <Input
          id="link"
          name="link"
          className="startup-form_input"
          required
          placeholder="Startup Image URL"
        />

        {error.link && <p className="startup-form_error">{error.link}</p>}
      </div>

      <div data-color-mode="light">
        <label htmlFor="pitch" className="startup-form_label">
          Pitch
        </label>
        <MDEditor
          value={pitch}
          onChange={(value) => setPitch(value as string)}
          id="pitch"
          className="startup-form_MDEditor"
          preview="edit"
          textareaProps={{
            placeholder:
              "Show us how your startup is going to change the world!",
          }}
        />

        {error.pitch && <p className="startup-form_error">{error.pitch}</p>}
      </div>
    </form>
  );
};

export default StartupForm;
