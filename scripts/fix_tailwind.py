from pathlib import Path
import re

root = Path(__file__).resolve().parent.parent
patterns = [
    (r'dark:bg-\[var\(--background-dark\)\]', 'dark:bg-(--background-dark)'),
    (r'bg-\[var\(--background-light\)\]', 'bg-(--background-light)'),
    (r'bg-\[var\(--primary\)\]/10', 'bg-(--primary)/10'),
    (r'bg-\[var\(--primary\)\]/5', 'bg-(--primary)/5'),
    (r'bg-\[var\(--primary\)\]', 'bg-(--primary)'),
    (r'text-\[var\(--primary\)\]', 'text-(--primary)'),
    (r'border-\[var\(--primary\)\]', 'border-(--primary)'),
    (r'focus:ring-\[var\(--primary\)\]', 'focus:ring-(--primary)'),
    (r'from-\[var\(--primary\)\]', 'from-(--primary)'),
    (r'bg-gradient-to-', 'bg-linear-to-'),
    (r'via-\[var\(--primary\)\]', 'via-(--primary)'),
    (r'rotate-\[-2deg\]', '-rotate-2'),
    (r'rotate-\[3deg\]', 'rotate-3'),
    (r'rotate-\[2deg\]', 'rotate-2'),
    (r'rotate-\[-3deg\]', '-rotate-3'),
    (r'aspect-\[4/3\]', 'aspect-4/3'),
    (r'flex-shrink-0', 'shrink-0'),
    (r'bg-\[#2547f4\]', 'bg-primary'),
    (r'hover:text-\[#2547f4\]', 'hover:text-primary'),
    (r'focus:ring-\[#2547f4\]', 'focus:ring-primary'),
    (r'shadow-\[#2547f4\]/30', 'shadow-primary/30'),
    (r'dark:bg-\[#101322\]/80', 'dark:bg-background-dark/80'),
    (r'text-\[var\(--primary\)\]-100', 'text-(--primary)-100'),
]
files = list(root.rglob('*.tsx')) + list(root.rglob('*.ts')) + list(root.rglob('*.css'))
changed = []
for file_path in files:
    if '.next' in file_path.parts or 'node_modules' in file_path.parts:
        continue
    text = file_path.read_text(encoding='utf-8')
    new_text = text
    for pattern, replacement in patterns:
        new_text = re.sub(pattern, replacement, new_text)
    if new_text != text:
        file_path.write_text(new_text, encoding='utf-8')
        changed.append(str(file_path.relative_to(root)))
print(f'changed {len(changed)} files')
for path in changed:
    print(path)
