json.array!(@candidates) do |candidate|
  json.extract! candidate, :id, :name, :major, :class
  json.url candidate_url(candidate, format: :json)
end
