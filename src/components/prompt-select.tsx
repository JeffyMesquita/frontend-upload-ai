import { Prompts } from '@/@types/prompts';
import { api } from '@/lib/axios';
import { useEffect, useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

interface PromptSelectProps {
  onPromptSelected: (template: string) => void;
}

export function PromptSelect({ onPromptSelected }: PromptSelectProps) {
  const [prompts, setPrompts] = useState<Prompts[] | null>(null);

  function handlePromptSelected(promptId: string) {
    const selectedPrompt = prompts?.find((prompt) => prompt.id === promptId);

    if (!selectedPrompt) return;

    onPromptSelected(selectedPrompt.template);
  }

  useEffect(() => {
    api.get('/prompts').then((response) => {
      setPrompts(response.data);
    });
  }, []);

  return (
    <Select onValueChange={handlePromptSelected}>
      <SelectTrigger>
        <SelectValue placeholder="Selecione um prompt..." />
      </SelectTrigger>
      <SelectContent>
        {prompts?.map((prompt) => (
          <SelectItem key={prompt.id} value={prompt.id}>
            {prompt.title}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}