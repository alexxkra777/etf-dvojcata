CREATE TABLE IF NOT EXISTS event_sessions (
  sid uuid PRIMARY KEY,
  event_count integer NOT NULL CHECK (event_count BETWEEN 0 AND 300)
);

CREATE TABLE IF NOT EXISTS events (
  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  sid uuid NOT NULL,
  variant varchar(16) NOT NULL,
  type text NOT NULL CHECK (type IN (
    'page_view', 'section_view', 'scroll_depth', 'engaged_5s', 'engaged_15s',
    'calc_change', 'compare_filter', 'twin_open', 'cta_click', 'form_view',
    'form_focus', 'form_submit', 'lead_ok', 'lead_error', 'pdf_download', 'share_click'
  )),
  section varchar(32),
  value double precision,
  props jsonb NOT NULL DEFAULT '{}',
  utm jsonb NOT NULL DEFAULT '{}',
  ref varchar(253),
  path varchar(256) NOT NULL,
  ts bigint NOT NULL,
  received_at timestamptz NOT NULL DEFAULT now(),
  device text NOT NULL CHECK (device IN ('mobile', 'tablet', 'desktop')),
  is_bot boolean NOT NULL DEFAULT false
);
CREATE INDEX IF NOT EXISTS events_received_idx ON events (received_at);
CREATE INDEX IF NOT EXISTS events_sid_type_idx ON events (sid, type, received_at);
CREATE INDEX IF NOT EXISTS events_human_received_idx ON events (received_at) WHERE NOT is_bot;

CREATE TABLE IF NOT EXISTS leads (
  email varchar(254) PRIMARY KEY,
  created_at timestamptz NOT NULL DEFAULT now(),
  last_seen_at timestamptz NOT NULL DEFAULT now(),
  consent_at timestamptz NOT NULL,
  consent_text_version varchar(128) NOT NULL,
  consent_history jsonb NOT NULL,
  sids uuid[] NOT NULL,
  variant varchar(16) NOT NULL,
  utm jsonb NOT NULL DEFAULT '{}',
  context jsonb NOT NULL DEFAULT '{}'
);
CREATE INDEX IF NOT EXISTS leads_created_idx ON leads (created_at);
CREATE INDEX IF NOT EXISTS leads_last_seen_idx ON leads (last_seen_at);
