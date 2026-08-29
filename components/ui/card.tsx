import * as React from 'react'; import {cn} from '@/lib/utils';
export function Card({className,...props}:React.HTMLAttributes<HTMLDivElement>){return <div className={cn('rounded-3xl border border-black/[.06] bg-white shadow-soft',className)} {...props}/>}
