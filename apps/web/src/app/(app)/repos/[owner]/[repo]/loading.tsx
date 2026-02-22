export default function RepoOverviewLoading() {
	return (
		<div className="flex flex-col flex-1 min-h-0 animate-pulse">
			{/* Readme skeleton */}
			<div className="border border-border/40 rounded-md p-6 mb-6">
				<div className="h-6 w-40 rounded bg-muted mb-4" />
				<div className="space-y-2.5">
					<div className="h-3 w-full rounded bg-muted/50" />
					<div className="h-3 w-5/6 rounded bg-muted/50" />
					<div className="h-3 w-4/6 rounded bg-muted/50" />
					<div className="h-3 w-3/4 rounded bg-muted/50" />
				</div>
				<div className="mt-6 space-y-2.5">
					<div className="h-3 w-full rounded bg-muted/50" />
					<div className="h-3 w-2/3 rounded bg-muted/50" />
				</div>
			</div>

			{/* Dashboard grid */}
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 flex-1 min-h-0">
				{/* PRs section */}
				<div className="p-4 rounded-md border border-border/40">
					<div className="flex items-baseline gap-2 mb-4">
						<div className="h-4 w-28 rounded bg-muted" />
						<div className="h-4 w-8 rounded bg-muted/40 ml-auto" />
					</div>
					<div className="space-y-3">
						{Array.from({ length: 5 }).map((_, i) => (
							<div key={i} className="flex items-center gap-2">
								<div className="h-3.5 w-3.5 rounded-full bg-muted/50" />
								<div className="h-3 w-8 rounded bg-muted/40" />
								<div className="h-3 flex-1 rounded bg-muted/40" />
								<div className="h-4 w-4 rounded-full bg-muted/30" />
							</div>
						))}
					</div>
				</div>

				{/* Issues section */}
				<div className="p-4 rounded-md border border-border/40">
					<div className="flex items-baseline gap-2 mb-4">
						<div className="h-4 w-24 rounded bg-muted" />
						<div className="h-4 w-8 rounded bg-muted/40 ml-auto" />
					</div>
					<div className="space-y-3">
						{Array.from({ length: 5 }).map((_, i) => (
							<div key={i} className="flex items-center gap-2">
								<div className="h-3.5 w-3.5 rounded-full bg-muted/50" />
								<div className="h-3 w-8 rounded bg-muted/40" />
								<div className="h-3 flex-1 rounded bg-muted/40" />
								<div className="h-4 w-4 rounded-full bg-muted/30" />
							</div>
						))}
					</div>
				</div>

				{/* Commit activity section */}
				<div className="p-4 rounded-md border border-border/40">
					<div className="h-4 w-32 rounded bg-muted mb-4" />
					<div className="flex items-end gap-1 h-20">
						{Array.from({ length: 16 }).map((_, i) => (
							<div
								key={i}
								className="flex-1 rounded-sm bg-muted/40"
								style={{ height: `${20 + Math.random() * 60}%` }}
							/>
						))}
					</div>
				</div>

				{/* Activity feed section */}
				<div className="p-4 rounded-md border border-border/40">
					<div className="h-4 w-20 rounded bg-muted mb-4" />
					<div className="space-y-3">
						{Array.from({ length: 4 }).map((_, i) => (
							<div key={i} className="flex items-center gap-2">
								<div className="h-5 w-5 rounded-full bg-muted/50" />
								<div className="h-3 flex-1 rounded bg-muted/40" />
								<div className="h-3 w-12 rounded bg-muted/30" />
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
