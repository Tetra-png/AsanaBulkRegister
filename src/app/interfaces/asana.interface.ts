export interface AsanaTaskSelectionForList {
  value: string;
  selected: boolean;
}

export interface AsanaProjectForList {
  gid: string;
  name: string;
  resource_type: string
}

export type GetAsanaProjectResponse  = {
  data: AsanaProjectForList[]
}

export interface AsanaSectionForList {
  gid: string
  resource_type: string
  name: string
}

export type GetAsanaSectionsResponse = {
  data: AsanaSectionForList[]
}

export interface AsanaTeamMemberForList {
  gid: string
  resource_type: string
  name: string
}

export type GetAsanaTeamMembersResponse = {
  data: AsanaTeamMemberForList[]
}

export type PostAsanaTaskRequest = {
  data: {
    approval_status?: string;
    assignee?: null | string;
    assignee_section?: null | string;
    assignee_status?: string;
    completed?: boolean;
    completed_by?: {
      name: string
    }
    custom_fields?: Object
    due_at?: null | string;
    due_on?: null | string;
    external?: {
      data: string
      gid: string
    }
    followers?: string[]
    html_notes?: string
    liked?: boolean
    name?: string
    notes?: string
    parent?: null | string;
    projects?: string[]
    resource_subtype?: string
    start_on?: null | string;
    tags?: string[]
    workspace?: string
  }
  opt_pretty?: boolean
  opt_fields?: string[]
}

export type PostAsanaTaskResponse = {
    data: {
      gid: string
      resource_type: string
      approval_status: string
      assignee_status: string
      completed: boolean
      completed_at: string
      completed_by: {
        gid: string
        resource_type: string
        name: string
      }
      created_at: string
      dependencies: [
        {
          gid: string
          resource_type: string
        }
      ]
      dependents: {
        gid: string
        resource_type: string
      }[]
      due_at: string
      due_on: string
      external: {
        data: string
        gid: string
      }
      hearted: boolean
      hearts: {
        gid: string
        user: {
          gid: string
          resource_type: string
          name: string
        }
      }[]
      html_notes: string
      is_rendered_as_separator: boolean
      liked: boolean
      likes:{
        gid: string
        user: {
          gid: string
          resource_type: string
          name: string
        }
      }[]
      memberships: {
        project: {
          gid: string
          resource_type: string
          name: string
        }
        section: {
          gid: string
          resource_type: string
          name: string
        }
      }[]
      modified_at: string
      name: string
      notes: string
      num_hearts: number
      num_likes: number
      num_subtasks: number
      resource_subtype: string
      start_on: string
      assignee: {
        gid: string
        resource_type: string
        name: string
      }
      assignee_section: {
        gid: string
        resource_type: string
        name: string
      }
      custom_fields: [
        {
          gid: string
          resource_type: string
          created_by: {
            gid: string
            resource_type: string
            name: string
          }
          currency_code: string
          custom_label: string
          custom_label_position: string
          description: string
          display_value: string
          enabled: boolean
          enum_options: {
            gid: string
            resource_type: string
            color: string
            enabled: boolean
            name: string
          }[]
          enum_value: {
            gid: string
            resource_type: string
            color: string
            enabled: boolean
            name: string
          }
          format: string
          has_notifications_enabled: true
          is_global_to_workspace: true
          multi_enum_values: {
            gid: string
            resource_type: string
            color: string
            enabled: false
            name: string
          }[]
          name: string
          number_value: number
          precision: number
          resource_subtype: string
          text_value: string
          type: string
        }
      ]
      followers:{
        gid: string
        resource_type: string
        name: string
      } []
      parent: {
        gid: string
        resource_type: string
        name: string
      }
      permalink_url: string
      projects: {
        gid: string
        resource_type: string
        name: string
      }[]
      tags: {
        gid: string
        name: string
      }[]
      workspace: {
        gid: string
        resource_type: string
        name: string
      }
    }
  }


